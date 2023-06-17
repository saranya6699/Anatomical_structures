import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { Observable, Subscription } from 'rxjs';
import { AnatomyService } from '../anatomy-service.service';
import { ErrorMessage, Structure, StructureData } from '../anatomy-structure.model';
import { ModalPopupComponent } from '../modal-popup/modal-popup.component';

@Component({
  selector: 'app-anatomy',
  templateUrl: './anatomy.component.html',
  standalone: true,
  imports: [MatListModule, CommonModule, MatGridListModule, MatDialogModule],
  styleUrls: ['./anatomy.component.scss']
})
export class AnatomyComponent implements OnInit, OnDestroy {
  structures$?: Observable<Structure[]>;
  subscription?: Subscription;
  constructor(private anatomyService: AnatomyService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.structures$ = this.anatomyService.getStructures();
  }

  openStructure(id: string) {
    this.subscription = this.anatomyService.getStructureData(id).subscribe((data: StructureData | ErrorMessage) => {
      this.dialog.open(ModalPopupComponent, {
        width: '40%',
        data: data
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}