const URL = 'https://jsonplaceholder.typicode.com/todos';

// axios(URL)
//     .then(({ data : todos}) => console.log(todos[102]))
//     .catch(err => console.log(err.message));


async function main() {
    const { data : todos} =await axios(URL); 

    const todosContainer = document.getElementById('todos');

    const { title, completed} = todos[102];

    display(todosContainer, title, completed);

}


function display(node, title, status) {
    node.innerHTML = 
    `
    <p>todo : ${title}</p>
    <p>completed : ${status ? 'OK' : 'Not yet'}</p>
    `
}

main();




