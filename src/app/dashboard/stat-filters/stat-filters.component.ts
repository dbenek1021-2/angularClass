// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-stat-filters',
//   templateUrl: './stat-filters.component.html',
//   styleUrls: ['./stat-filters.component.scss']
// })
// export class StatFiltersComponent {
//   videoSearch: FormGroup;

//   constructor(fb: FormBuilder) {
//     this.videoSearch = fb.group({
//       region: [''],
//       dateRange: [''],
//       ageGroups: ['']
//     });
//   }


// }
import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss'],
})
export class StatFiltersComponent implements OnDestroy {
  videoSearch = new FormControl('');
  subscription: Subscription;

  constructor() {
    this.subscription = this.videoSearch.valueChanges
      // .pipe(startWith(this.videoSearch.value))
      .subscribe((value) => {
        console.log(value);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
