console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {
  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve('popcorn'), 3000);
  });
  const addButter = new Promise((resolve, reject) => {
    setTimeout(() => resolve('butter'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  console.log(`got the ${ticket}`);
  console.log(`Husband: we should go in now`);
  console.log(`Wife: "I am hungry"`);

  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
  console.log(`Husband: we should go in now`);
  console.log(`Wife: "I don't like popcorn without butter!"`);

  let butter = await addButter;
  console.log(`added ${butter}`);
  console.log(`Husband: Anything else, darling`);
  console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);

  return ticket;
};

const getColdDrinks = new Promise((resolve, reject) => {
  setTimeout(() => resolve('cold drinks'), 2000);
});

preMovie()
  .then(() => {
    return getColdDrinks;
  })
  .then((drinks) => {
    console.log(`Husband: Here are ${drinks}`);
  })
  .then(() => {
    console.log('person4 shows ticket');
  });

console.log('person4 shows ticket');
