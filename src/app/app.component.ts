import { Component } from '@angular/core';

@Component({  // bu component i yazmamızı sağlayan typescrpt sin kendisi.
  selector: 'app-root', // hmtl deki app root
  templateUrl: './app.component.html', // sen app.component.html in datatsını yönetecek olan componnetsin.
  styleUrls: ['./app.component.css'] // Bu html in css lerin koyduğumuz yer. []: array niye array çünkü birden fazla component olabilir.
})
export class AppComponent {
  title = 'Car Rental Program';
  //string title = "Bişey"; üstteki kod bu işte. Typescipr deki karşılığı bu.
  user='Aslı Kayalık';
 
}
// ./ aynı kalsör demek.

// süslü parantez javascritp de obje demek.Obje içinde bir sürü özellik yukarıdaki gibi verevilirizç
// app.component.ts : datayı yönettiği yer.
// app.compenent.html : olayın görüntüsü.
// Angular da aher şey class. Ama bir sürü bileşen var.
// Component: Html in datasını yönettiğimiz yer.
// @ : class a çalışma anında bşr anlam yüklemeye yarayan imza.