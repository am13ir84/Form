document.addEventListener("DOMContentLoaded", function() {
  const messageContainer = document.getElementById("message-container");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");

  
  const savedMessages = localStorage.getItem("messages");
  if (savedMessages) {
    messageContainer.innerHTML = savedMessages;
  }

  
  sendButton.addEventListener("click", function() {
    const messageText = messageInput.value;
    const currentDate = new Date().toLocaleString();

    if (messageText) {
      
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.innerHTML = `<span class="message-text">${messageText}</span><br><span class="message-date">${currentDate}</span>`;

      
      messageContainer.appendChild(messageElement);

      
      localStorage.setItem("messages", messageContainer.innerHTML);


      messageInput.value = "";
    }
  });
});