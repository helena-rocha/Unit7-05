let day = ''
let age = 18

document.getElementById('button').addEventListener('click', newfunction)
function newfunction () {
  day = document.getElementById('input').value
  age = document.getElementById('input-2').value
  if (day != 'Monday' && day != 'monday' && day != 'Tuesday' && day != 'tuesday' && day != 'Wednesday' && day != 'wednesday' && day != 'Thursday' && day != 'thursday' && day != 'Friday' && day != 'friday' && day != 'Saturday' && day != 'saturday' && day != 'Sunday' && day != 'sunday')
  {
    document.getElementById('paragraph').innerHTML = 'Enter a proper day of the week'
  }
  else if (age < 0)
    {
      document.getElementById('paragraph').innerHTML = 'Enter a proper age'
    }
    else
    {
      if (!(day === 'Saturday' || day === 'saturday' || day == 'Sunday' || day === 'sunday') && age >= 18)
      {
        document.getElementById('paragraph').innerHTML = 'Time to work'
      }
      else if (!(day === 'Saturday' || day === 'saturday' || day == 'Sunday' || day === 'sunday') && age < 18)
        {
          document.getElementById('paragraph').innerHTML = 'Time for school'  
        } else {
          document.getElementById('paragraph').innerHTML = 'No school/work'
        }
    }
}
