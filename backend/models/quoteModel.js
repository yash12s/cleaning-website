import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  serviceType: { type: String, required: true },
  details: { type: String, required: true },
}, { timestamps: true });

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;
