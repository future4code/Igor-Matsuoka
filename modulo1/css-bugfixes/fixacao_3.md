```javascript

function calculaNota(ex, p1, p2) {
  let mediaPonderada = ((2*p1)+(3*p2)+(1*ex))/6
  if(mediaPonderada >= 9) {
    return "A"
  } else if (mediaPonderada >= 7.5 && mediaPonderada < 9) {
    return "B"
  } else if (mediaPonderada >= 6 && mediaPonderada < 7.5) {
    return "C"
  } else if (mediaPonderada < 6) {
    return "D"
  }
}

```