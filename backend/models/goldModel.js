import mongoose from 'mongoose';

const goldSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

const goldModel = mongoose.models.gold || mongoose.model('gold', goldSchema);

export { goldModel };  // Ensure the export is done correctly
