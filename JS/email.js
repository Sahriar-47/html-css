
const url = 'https://emailreputation.abstractapi.com/v1/';
const apiKey = '8b6cf262ff504d1ca1ee235ea7b8cf67';
const email = 'sahriar22047@gmail.com';

fetch(`${url}?api_key=${apiKey}&email=${email}`)
  .then(response => response.json())
  .then(data => {
    if (data.email_deliverability.status === 'deliverable') {
      console.log('The email is deliverable');
    } else {
      console.log('The email is not deliverable');
    }
  });
