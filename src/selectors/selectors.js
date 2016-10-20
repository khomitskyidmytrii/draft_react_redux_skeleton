export function authorsFormattedForSelect(authors) {
   return authors.map(author => {
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    };
  });
}

