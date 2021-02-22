let day = ''
let age = 18

document.getElementById('button').addEventListener('click', newfunction)
function newfunction () {
  day = document.getElementById('input').value
  age = document.getElementById('input-2').value
  if (age > 18) {
    document.getElementById('paragraph').innerHTML = 'Time to work'
  } else if ((day === 'Saturday' || day === 'Sunday') && (age <= 18)) { 
  document.getElementById('paragraph').innerHTML = 'No school/work'
  } else {
    document.getElementById('paragraph').innerHTML = 'Time for school'
  }
}
