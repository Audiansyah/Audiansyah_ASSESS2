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
  