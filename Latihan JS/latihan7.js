let siswa = 'Dedi Supriadi'
let nilai = 80.6
let grade = ''

if (nilai > 85 && nilai <= 100) {
  grade = 'A'
} else if (nilai > 75 && nilai <= 85) {
  grade = 'B'
} else if (nilai > 60 && nilai <= 75) {
  grade = 'C'
} else if (nilai > 30 && nilai <= 60) {
  grade = 'D'
} else if (nilai >= 0 && nilai <= 30) {
  grade = 'E'
} else {
  grade = 'Nilai tidak valid'
}

switch (grade) {
  case 'A':
    predikat = 'Sangat Memuaskan';
    break;
  case 'B':
    predikat = 'baik';
    break;
  case 'C':
    predikat = 'Cukup';
    break;
  case 'D':
    predikat = 'Kurang';
    break;
  case 'E':
    predikat = 'Sangat Kurang';
    break;
  default: predikat = 'Nilai tidak valid';
    break;
}

document.write("Siswa bernama " + siswa + " mendapatkan grade " + grade + " predikatnya " + predikat + " dengan nilai " + nilai)