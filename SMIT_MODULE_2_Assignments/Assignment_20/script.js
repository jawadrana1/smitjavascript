
    const editableText = document.getElementById('editableText');
    const boldButton = document.getElementById('boldButton');
    const italicButton = document.getElementById('italicButton');
    const strikeButton = document.getElementById('strikeButton');

    function formatText(command) {
        document.execCommand(command);
        editableText.focus();
    }

    boldButton.addEventListener('click', () => formatText('bold'));
    italicButton.addEventListener('click', () => formatText('italic'));
    strikeButton.addEventListener('click', () => formatText('strikeThrough'));
