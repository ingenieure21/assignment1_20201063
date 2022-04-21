function Books({ title, author, picture }) {
  return (
    <div>
      <h2>I like {title} </h2>
      <h3>written by {author} </h3>
      <img src={picture} />
    </div>
  );
}

const booksILike = [
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fphoto.goodreads.com%2Fbooks%2F1328864749l%2F1891.jpg&f=1&nofb=1',
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-L85-PjFkRkg%2FT8uV7hnaOKI%2FAAAAAAAAASk%2FxW-lfZtCUGU%2Fs1600%2Ftwo%2Bcities.jpg&f=1&nofb=1',
  },
  {
    title: 'Le Petit Prince',
    author: 'Antoine de Saint-Exupéry',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fe2%2Fa1%2Ff5%2Fe2a1f503d05235657d0308b796b52e66--childrens-books-in-french.jpg&f=1&nofb=1',
  },
  {
    title: 'Demain les chats',
    author: 'Bernard Werber',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.viedegeek.fr%2Fmedia%2F2017%2F03%2FDemain_les_chats-344x500.jpg&f=1&nofb=1',
  },
  {
    title: 'Une saison en enfer',
    author: 'Arthur Rimbaud',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fidata.over-blog.com%2F0%2F52%2F78%2F10%2FLirePoesieTheatre%2FSaisonRimbaud.jpg&f=1&nofb=1',
  },
];

function App() {
  return (
    <div>
      {booksILike.map(current => (
      <Books key={current.title} title={current.title} author={current.author} picture={current.image} />))}
    </div>
  );
}

export default App;