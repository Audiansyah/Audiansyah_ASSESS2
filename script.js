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
  