const mongoose = require('mongoose');

// MongoDB Connection
let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }

    const connection = await mongoose.connect(process.env.MONGODB_URI, {
        bufferCommands: false,
    });

    cachedDb = connection;
    return connection;
}

// Contact Model
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// Serverless Function Handler
module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-Type, Date, X-Api-Version');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        // Connect to database
        await connectToDatabase();

        const { url, method } = req;
        const path = url.replace('/api', '');

        // Health check
        if (path === '/health' && method === 'GET') {
            return res.status(200).json({
                status: 'ok',
                message: 'SAFNECT API is running',
                environment: 'vercel'
            });
        }

        // POST /api/contact - Submit contact form
        if (path === '/contact' && method === 'POST') {
            const { name, email, message } = req.body;

            // Validation
            if (!name || !email || !message) {
                return res.status(400).json({
                    success: false,
                    error: 'Please provide name, email, and message'
                });
            }

            // Create new contact
            const contact = new Contact({ name, email, message });
            await contact.save();

            console.log('✅ New contact saved:', { name, email });

            return res.status(201).json({
                success: true,
                message: 'Thank you for contacting us! We will get back to you soon.',
                data: contact
            });
        }

        // GET /api/contacts - Get all contacts
        if (path === '/contacts' && method === 'GET') {
            const contacts = await Contact.find().sort({ createdAt: -1 });
            return res.status(200).json({
                success: true,
                count: contacts.length,
                data: contacts
            });
        }

        // 404 for unknown routes
        return res.status(404).json({
            success: false,
            error: 'API endpoint not found'
        });

    } catch (error) {
        console.error('❌ API Error:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
};
