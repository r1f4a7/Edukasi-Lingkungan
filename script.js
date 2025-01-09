document.getElementById("quizForm1").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Terima kasih sudah mengerjakan quiz kategori ini!");
    this.reset();
  });
  