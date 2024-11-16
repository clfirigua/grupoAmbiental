
document.getElementById('pqrForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const type = document.getElementById('type').value;
    const message = document.getElementById('message').value;

    // Aquí usamos Formspree para enviar el correo
    const response = await fetch('https://formspree.io/f/myzyjrqk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            type: type,
            message: message
        })
    });

    const result = await response.json();

    if (response.ok) {
        document.getElementById('responseMessage').textContent = "¡Gracias! Tu solicitud ha sido enviada.";
        document.getElementById('pqrForm').reset();
    } else {
        document.getElementById('responseMessage').textContent = "Hubo un error. Por favor, inténtalo de nuevo.";
    }
});