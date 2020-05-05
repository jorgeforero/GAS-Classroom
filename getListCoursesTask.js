function listAllAssignments() {
  
  // Hoja de Cálculo activa
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('Tareas');  
  
  // Obtiene la lista de todos los cursos
  var response = Classroom.Courses.list();
  var courses = response.courses;
  
  var arr =[];
  
  // Recorre el areglo courses
  if (courses && courses.length > 0) {
    for (var i = 0; i < courses.length; i++) {
      var course = courses[i];
      
      // Recorre los assignmets de curso
      for (var k = 0; k < w.length; k++) {
        var c = w[k]; 
        var ids = c.id;
        var user = c.creatorUserId;
        var type = c.workType;
        var ti = c.title;
        var des = c.description;
        var st = c.state;
        var sch = c.scheduledTime;
        var due = c.dueDate;
        arr.push([ids,user,type,ti,des,st,sch,due]);
      }
      // Registra la información extraida en la hoja de cálculo
      sh.getRange(1, 1, arr.length, arr[0].length).setValues(arr); 
    }
  } else {
    Logger.log('No se encontraron cursos');
  };
  
};
