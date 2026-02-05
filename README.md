# Product API - MongoDB CRUD Operations

A simple Express.js API for managing products with bilingual support (English/Arabic), ready for Vercel deployment.

## Features

- ✅ Create, Read, Update, Delete products
- ✅ Bilingual support (English & Arabic)
- ✅ Language-specific filtering
- ✅ MongoDB integration with Mongoose
- ✅ Ready for Vercel serverless deployment
- ✅ CORS enabled

## API Endpoints

### Get All Products
```
GET /api/products
```
Returns all products with all fields.

### Get Products by Language
```
GET /api/products?lang=en
GET /api/products?lang=ar
```
Returns products with only the specified language fields (name, description, category).

### Create Product
```
POST /api/products
Content-Type: application/json

{
  "name_en": "Crispy Chicken Fillet",
  "name_ar": "فيليه دجاج مقرمش",
  "description_en": "Golden fried chicken breast with spicy mayo.",
  "description_ar": "صدر دجاج مقلي ذهبي مع مايونيز حار.",
  "order": 6,
  "category_en": "Chicken",
  "category_ar": "دجاج",
  "images": [
    "https://i.postimg.cc/V6WsFzqW/chicken-4198085-640.jpg",
    "https://i.postimg.cc/4dQ41X6h/food-712665-640.jpg"
  ],
  "price": 20,
  "offerPrice": 0,
  "isOffer": false,
  "isPopular": false
}
```

### Get Single Product
```
GET /api/products/:id
```

### Update Product
```
PATCH /api/products/:id
Content-Type: application/json

{
  "price": 25,
  "isOffer": true,
  "offerPrice": 18
}
```

### Delete Product
```
DELETE /api/products/:id
```

## Local Development

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Create `.env` file:**
```bash
cp .env.example .env
```

3. **Update `.env` with your MongoDB connection:**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
PORT=3000
NODE_ENV=development
```

4. **Run the server:**
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## Deploy to Vercel

### Method 1: Vercel CLI

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Add environment variable:**
```bash
vercel env add MONGODB_URI
```
Paste your MongoDB connection string when prompted.

5. **Deploy to production:**
```bash
vercel --prod
```

### Method 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variable:
   - Name: `MONGODB_URI`
   - Value: Your MongoDB connection string
6. Click "Deploy"

## Environment Variables

Set these in Vercel dashboard or using Vercel CLI:

- `MONGODB_URI` - Your MongoDB connection string (required)

## Response Format

### Success Response
```json
{
  "success": true,
  "data": {...}
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message"
}
```

## Product Schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name_en | String | Yes | Product name in English |
| name_ar | String | Yes | Product name in Arabic |
| description_en | String | Yes | Description in English |
| description_ar | String | Yes | Description in Arabic |
| order | Number | Yes | Display order |
| category_en | String | Yes | Category in English |
| category_ar | String | Yes | Category in Arabic |
| images | Array[String] | Yes | Array of image URLs |
| price | Number | Yes | Product price |
| offerPrice | Number | No | Discounted price (default: 0) |
| isOffer | Boolean | No | Is on offer (default: false) |
| isPopular | Boolean | No | Is popular item (default: false) |

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- Vercel (Serverless)

## License

ISC
