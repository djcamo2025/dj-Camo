fetch("https://ipapi.co/json/")
  .then(res => res.json())
  .then(info => {
      fetch("/log.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              time: new Date().toISOString(),
              ip: info.ip,
              city: info.city,
              country: info.country_name,
              page: window.location.pathname
          })
      });
  });