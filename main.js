const btn = document.querySelector('button');

const div = document.querySelector('div');

const names = ['tomek', 'agnieszka', 'ola', 'zenek', 'ewa', 'pawel', 'asia']



const nameGenerator = () => {
    const index = Math.floor(Math.random() * names.length);
    div.textContent = `wylosowane imie to ${names[index]}`;
}

btn.addEventListener('click', nameGenerator)