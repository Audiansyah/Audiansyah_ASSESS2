$(document).ready(function() {
    $('#competitionTable').DataTable({
      ajax: {
        url: 'http://api.football-data.org/v4/competitions/',
        dataSrc: function(data) {
          return data.competitions;
        }
      },
      columns: [
        { data: 'name' },
        { data: 'area.name' },
        { data: 'plan' },
        { data: 'code' }
      ]
    });
  });
  

  // Membuat form HTML
  const form = document.createElement('form');
  
  // Membuat input field untuk setiap atribut
  for (const key in competitionData) {
    if (competitionData.hasOwnProperty(key)) {
      const label = document.createElement('label');
      label.textContent = key;
      
      const input = document.createElement('input');
      input.type = 'text';
      input.name = key;
      input.value = competitionData[key];
      
      form.appendChild(label);
      form.appendChild(input);
    }
  }
  
  // Menambahkan form ke dalam dokumen HTML
  document.body.appendChild(form);

// Menambahkan event listener untuk submit form
form.addEventListener('submit', function(event) {
  // Mencegah pengiriman form secara default
  event.preventDefault();

  // Mendapatkan referensi ke input fields
  const idInput = document.querySelector('input[name="id"]');
  const adviceInput = document.querySelector('input[name="advice"]');
  const dateInput = document.querySelector('input[name="date"]');

  // Mendapatkan nilai dari input fields
  const idValue = idInput.value;
  const adviceValue = adviceInput.value;
  const dateValue = dateInput.value;

  // Melakukan validasi
  if (idValue === '') {
    alert('ID tidak boleh kosong');
    return;
  }

  if (adviceValue === '') {
    alert('Advice tidak boleh kosong');
    return;
  }

  if (dateValue === '') {
    alert('Date tidak boleh kosong');
    return;
  }

  // Jika semua validasi berhasil, kirim form
  form.submit();
});

  