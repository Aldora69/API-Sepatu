# Shoe Cleaning Service API

This is a RESTful API for managing a shoe cleaning service. The API allows for tracking shoe cleaning orders, their status, and other relevant information.

## Features

- Create new shoe cleaning orders
- List all orders with optional status filtering
- Get details of specific orders
- Update order information and status
- Delete orders

## Data Structure

Each shoe cleaning order contains the following information:

```json
{
  "id": "uuid",
  "customer_name": "string",
  "shoe_type": "string",
  "service_type": "string",
  "status": "string", // ["Pending", "In Progress", "Selesai", "Dibatalkan"]
  "notes": "string",
  "created_at": "timestamp",
  "updated_at": "timestamp"
}
```

## API Endpoints

### GET /api/shoe-cleaning
Get all shoe cleaning orders. Can be filtered by status.

Query Parameters:
- status (optional): Filter by order status

Example Request:
```http
GET /api/shoe-cleaning?status=Selesai
```

Example Response:
```json
{
  "success": true,
  "data": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "customer_name": "John Doe",
      "shoe_type": "Sneakers",
      "service_type": "Deep Clean",
      "status": "Selesai",
      "notes": "White shoes",
      "created_at": "2025-10-22T10:00:00Z",
      "updated_at": "2025-10-22T12:00:00Z"
    }
  ]
}
```

### POST /api/shoe-cleaning
Create a new shoe cleaning order.

Example Request:
```http
POST /api/shoe-cleaning
Content-Type: application/json

{
  "customerName": "John Doe",
  "shoeType": "Sneakers",
  "serviceType": "Deep Clean",
  "notes": "White shoes"
}
```

### GET /api/shoe-cleaning/:id
Get a specific order by ID.

### PUT /api/shoe-cleaning/:id
Update an existing order.

Example Request:
```http
PUT /api/shoe-cleaning/123e4567-e89b-12d3-a456-426614174000
Content-Type: application/json

{
  "status": "Selesai"
}
```

### DELETE /api/shoe-cleaning/:id
Delete an order.

## Installation and Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   PORT=3000
   ```
4. Create a table in your Supabase database:
   ```sql
   create table shoe_cleaning (
     id uuid default uuid_generate_v4() primary key,
     customer_name text not null,
     shoe_type text not null,
     service_type text not null,
     status text not null default 'Pending',
     notes text,
     created_at timestamp with time zone default timezone('utc'::text, now()),
     updated_at timestamp with time zone
   );
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

This API is deployed on Vercel. To deploy your own instance:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel's project settings
4. Deploy!