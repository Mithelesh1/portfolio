<script>
  // Apply theme on page load
  window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  }

  function toggleDarkMode() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
</script>
