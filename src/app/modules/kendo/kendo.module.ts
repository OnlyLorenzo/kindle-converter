import { NgModule } from '@angular/core';
import { DatePickerModule, DateTimePickerModule, TimePickerModule } from '@progress/kendo-angular-dateinputs';
import { GridModule, ExcelModule, PDFModule } from '@progress/kendo-angular-grid';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { CardModule } from '@progress/kendo-angular-layout';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { PagerModule } from '@progress/kendo-angular-pager';
import { ColorPickerModule } from '@progress/kendo-angular-inputs';

const kendoModules = [
  GridModule,
  PagerModule,
  ExcelModule,
  PDFModule,
  DatePickerModule,
  DateTimePickerModule,
  TimePickerModule,
  ToolBarModule,
  CardModule,
  LayoutModule,
  ScrollViewModule,
  LabelModule,
  DropDownsModule,
  ColorPickerModule
];

@NgModule({
  declarations: [],
  imports: [kendoModules],
  exports: [kendoModules],
})
export class KendoModule {}
