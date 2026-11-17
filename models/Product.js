const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Product name is required'],
        trim: true,
        minlength: [3, 'Product name must be at least 3 characters long']
    },
    price: { 
        type: Number, 
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative']
    },
    description: { 
        type: String, 
        trim: true 
    },
    category: { 
        type: String, 
        required: [true, 'Category is required'],
        trim: true
    },
    stock: { 
        type: Number, 
        required: [true, 'Stock quantity is required'],
        min: [0, 'Stock cannot be negative'],
        default: 0
    },
    inStock: { 
        type: Boolean, 
        default: true 
    }
}, { timestamps: true });

// Pre-save middleware to automatically update 'inStock' status based on stock value
productSchema.pre('save', function(next) {
    this.inStock = this.stock > 0;
    next();
});

module.exports = mongoose.model('Product', productSchema);
