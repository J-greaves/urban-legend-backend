import { prisma } from '../prisma.server';
import storiesData from '../data/test-data/stories';
import usersData from '../data/test-data/users';
import favouritesData from '../data/test-data/favourites';

async function seed() {
  console.log('Seeding database...');

  await prisma.storyFavorites.deleteMany();

  await prisma.story.deleteMany();

  await prisma.user.deleteMany();

  await prisma.$executeRaw`ALTER TABLE Story AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE User AUTO_INCREMENT = 1`;
  await prisma.$executeRaw`ALTER TABLE StoryFavorites AUTO_INCREMENT = 1`;

  await prisma.user.createMany({
    data: usersData,
  });

  await prisma.story.createMany({
    data: storiesData,
  });

  await prisma.storyFavorites.createMany({
    data: favouritesData,
  });

  console.log('Database seeded successfully!');
}

export default seed;
