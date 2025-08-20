import knex from "knex";
import config from '../../../../knexfile';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const keywords = searchParams.get("keywords") || "";

  const env = process.env.NODE_ENV || 'development';
  const dbconnection = knex(config[env]);
  const imagesResponse = await dbconnection('images')
  .join('image_title', 'images.title_id', 'image_title.id')
  .join('image_property', 'images.property_id', 'image_property.id')
  .select(
    'images.name',
    'images.image_path',
    'image_title.title',
    'images.description',
    'image_property.width',
    'image_property.height'
  ).where('images.keywords', keywords)
  .orderBy('images.order', 'asc');

  const images = imagesResponse.map((image) => (
    { src: `${image.image_path}${image.name}`, alt: image.description, title: image.title, description: image.description, width: image.width, height: image.height}
  ));

  return Response.json(images);
}
