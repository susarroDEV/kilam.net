const formData = new FormData();
formData.append('name', 'Test User');
formData.append('email', 'test@example.com');
formData.append('message', 'Test message');
formData.append('formId', 'test-form');

fetch('http://localhost:4322/api/contact.json', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
