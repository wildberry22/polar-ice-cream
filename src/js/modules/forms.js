const forms = () => {
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    const message = {
        loading: 'Loading...',
        success: 'Thank you! We will contact you soon',
        failure: 'Something went wrong...'
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            postData('server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });

        });
    });
};

export default forms;