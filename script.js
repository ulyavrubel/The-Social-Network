async function init() {
  const users = await fetch('https://randomuser.me/api/?results=10')
    .then(result => result.json())
    .then(({results}) => results);

  const userNodes = users.map(({name, picture}) => {
    const fullName = name.first + ' ' + name.last;

    const div = document.createElement('div');
    div.setAttribute('class', 'user-card');
    const img = document.createElement('img');

    img.setAttribute('src', picture.medium);
    img.setAttribute('alt', fullName);

    const textDiv = document.createElement('div');
    textDiv.innerHTML = `
      <span>${name.first}</span>
      <br/>
      <span>${name.last}</span>
    `;

    div.append(img);
    div.append(textDiv);

    return div;
  });

  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  userNodes.forEach(node => container.append(node));

  document.body.append(container);
}

init();
