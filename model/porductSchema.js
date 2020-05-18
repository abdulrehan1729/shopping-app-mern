const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsSchema = new Schema({
  name: { type: String },
  sku: { type: String },
  url: { type: String },
  brand: {
    name: { type: String },
    sub_brand: { type: String },
  },
  media: {
    standard: { type: Array },
    thumbnail: { type: Array },
  },
  meta: {
    breadcrumbs: {
      1: { type: String },
      2: { type: String },
      3: { type: String },
    },
    bert_original_classification: {
      l1: { type: String },
      l2: { type: String },
      l3: { type: String },
      l4: { type: String },
    },
    reference: { type: String },
  },
  website_id: {
    $oid: { type: String },
  },
  price: {
    offer_price: {
      currency: { type: String },
      value: { type: String },
    },
    regular_price: {
      currency: { type: String },
      value: { type: String },
    },
    basket_price: {
      currency: { type: String },
      value: { type: String },
    },
  },
  description_text: { type: String },
  spider: { type: String },
  stock: {
    available: { type: Boolean },
  },
  classification: {
    l1: { type: String },
    l2: { type: String },
    l3: { type: String },
    l4: { type: String },
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  similar_products: Schema.Types.Mixed,
  positioning: {
    page: { type: Number },
    rank: { type: Number },
  },
  lv_url: { type: String },
  price_changes: Schema.Types.Mixed,
  price_positioning: { type: Number },
  price_positioning_text: { type: String },
});
const ProductsModel = mongoose.model("Products", productsSchema);
module.exports = ProductsModel;
