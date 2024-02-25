import prisma from "./db";
async function VisitorCount() {
  const user = await prisma.visitors.update({
    where: {
      id: 1,
    },
    data: { count: 10 },
  });
  console.log(visitors);
  VisitorCount();
  return <div>VisitorCount</div>;
}

export { VisitorCount };
