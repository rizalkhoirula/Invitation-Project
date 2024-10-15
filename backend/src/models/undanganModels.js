const mongoose = require("mongoose");
const UndanganSchema = new mongoose.Schema({
    Name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String 
    },
    message: { 
        type: String 
    },
    status: { 
        type: String, 
        enum: ['Datang', 'pending', 'Tidak Datang'], default: 'pending' 
    },
    isScanned: { 
        type: Boolean, 
        default: false 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
  });
  
  module.exports = mongoose.model('Undangan', UndanganSchema);
  