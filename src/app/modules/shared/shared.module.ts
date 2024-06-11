// import { NgModule } from '@angular/core';
// import { CommonModule, DatePipe } from '@angular/common';
// import { MaterialModule } from '../material/material.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { AutofocusDirective } from './directives/autofocus/autofocus.directive';
// import { CmmsTranslatePipe } from './pipes/cmms-translate/cmms-translate.pipe';
// import { CmmsTruncatePipe } from './pipes/cmms-truncate/cmms-truncate.pipe';
// import { HeaderComponent } from './components/header/header.component';
// import { TilesComponent } from './components/tiles/tiles.component';
// import { KendoModule } from '../kendo/kendo.module';
// import { ToastComponent } from './components/toast/toast.component';
// import { DialogComponent } from './components/dialog/dialog.component';
// import { OrderByPipe } from './pipes/order-by/order-by.pipe';
// import { IsAuthorizedPipe } from './pipes/is-authorized/is-authorized.pipe';
// import { SafePipe } from './pipes/safe/safe.pipe';
// import { TextValueSerializablePipe } from './pipes/text-value/text-value-serializable';
// import { TextGuidSerializablePipe } from './pipes/text-value/text-guid-serializable';
// import { EquipmentTypePipe } from './pipes/text-value/equipment-type';
// import { EquipmentCategoryPipe } from './pipes/text-value/equipment-category';
// import { FindPipe } from './pipes/text-value/find';
// import { EquipmentModelPipe } from './pipes/text-value/equipment-model';
// import { SpinnerComponent } from './components/spinner/spinner.component';
// import { StatusPipe } from './pipes/text-value/status';
// import { DepGeographicalPipe } from './pipes/text-value/depGeographical';
// import { DepFunctionalPipe } from './pipes/text-value/depFunctional';
// import { SapCoActivityTypesPipe } from './pipes/text-value/sapCoActivityTypes';
// import { SapWorkCenterPipe } from './pipes/text-value/sapWorkCenter';
// import { WorkOrderTypePipe } from './pipes/text-value/wo-type';
// import { WorkOrderDefectTypePipe } from './pipes/text-value/wo-defectType';
// import { FilterPipe } from './pipes/filter/filter.pipe';
// import { FilterMachinePipe } from './pipes/filter-machine/filter-machine.pipe';
// import { MachineTypePipe } from './pipes/text-value/machineType';
// import { ProcessPhasePipe } from './pipes/text-value/processPhase';
// import { SubProcessPhasePipe } from './pipes/text-value/subProcessPhase';
// import { HighlightPipe } from './pipes/highlight/highlight.pipe';
// import { EquipmentModelTreeComponent } from './components/equipment-model-tree/equipment-model-tree.component';
// import { SparePartSelectionComponent } from './components/spare-part-selection/spare-part-selection.component';
// import { ReasonFilterPipe } from './pipes/reason-filter/reason-filter.pipe';
// import { MultiChoicePipe } from './pipes/multi-choice/multi-choice.pipe';
// import { FileFilterPipe } from './pipes/file-filter/file-filter.pipe';
// import { WorkOrderStatusesDialogComponent } from './dialogs/workorder-statuses-dialog/workorder-statuses-dialog.component';
// import { OffLineSpinnerDirective } from './directives/offlinespinner/offlinespinner.directive';
// import { ApiConnectionLostDirective } from './directives/apiconnectionlost/apiconnectionlost.directive';
// import { MessageConnectionComponent } from './components/message-connection/message-connection.component';
// import { CmmsDatePipe } from './pipes/cmms-date/cmms-date.pipe';
// import { EquipmentStructureTreeComponent } from './components/equipment-structure-tree/equipment-structure-tree/equipment-structure-tree.component';
// import { TriStateCheckboxComponent } from './components/tri-state-checkbox/tri-state-checkbox.component';
// import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
// import { FormatCaptionPipe } from './pipes/format-caption/format-caption.pipe';
// import { BroadcastMessageDirective } from './directives/broadcast-message/broadcast-message.directive';
// import { FormatBreakPipe } from './pipes/format-break/format-break.pipe';
// import { PushNotificationService } from './services/push-notification/push-notification.service';
// import { EquipmentListDialogComponent } from './dialogs/equipment-list-dialog/equipment-list-dialog.component';
// import { UserListDialogComponent } from './dialogs/user-list-dialog/user-list-dialog.component';
// import { OrderListDialogComponent } from './dialogs/order-list-dialog/order-list-dialog.component';
// import { KendoCustomDataBindingDirective } from './directives/kendo-custom-data-binding/kendo-custom-data-binding.directive';
// import { SearchKeysPipe } from './pipes/text-value/searchKeys';
// import { ShiftPipe } from './pipes/text-value/shift';
// import { MaintainerPipe } from './pipes/text-value/maintainers';
// import { RoleListDialogComponent } from './dialogs/role-list-dialog/role-list-dialog.component';
// import { MachinePipe } from './pipes/text-value/machine';
// import { TextCommonEntityTextSerializablePipe } from './pipes/text-value/text-common-entity-guid-serializable copy';
// import { KpiViewerComponent } from './components/kpi-viewer/kpi-viewer.component';
// import { ExecutedOperationsPipe } from './pipes/executed-operations/executed-operations.pipe';

// @NgModule({
//   declarations: [
//     AutofocusDirective,
//     CmmsTranslatePipe,
//     CmmsTruncatePipe,
//     CmmsDatePipe,
//     OrderByPipe,
//     FileFilterPipe,
//     FilterPipe,
//     FilterMachinePipe,
//     MultiChoicePipe,
//     SafePipe,
//     SearchKeysPipe,
//     FormatCaptionPipe,
//     FormatBreakPipe,
//     IsAuthorizedPipe,
//     TextValueSerializablePipe,
//     TextGuidSerializablePipe,
//     EquipmentTypePipe,
//     EquipmentCategoryPipe,
//     FindPipe,
//     EquipmentModelPipe,
//     StatusPipe,
//     WorkOrderTypePipe,
//     DepGeographicalPipe,
//     DepFunctionalPipe,
//     SapCoActivityTypesPipe,
//     SapWorkCenterPipe,
//     WorkOrderDefectTypePipe,
//     MachineTypePipe,
//     ProcessPhasePipe,
//     SubProcessPhasePipe,
//     ShiftPipe,
//     MaintainerPipe,
//     HighlightPipe,
//     MachinePipe,
//     ExecutedOperationsPipe,
//     HeaderComponent,
//     TilesComponent,
//     ToastComponent,
//     DialogComponent,
//     SpinnerComponent,
//     EquipmentModelTreeComponent,
//     SparePartSelectionComponent,
//     KpiViewerComponent,
//     ReasonFilterPipe,
//     WorkOrderStatusesDialogComponent,
//     EquipmentListDialogComponent,
//     OrderListDialogComponent,
//     UserListDialogComponent,
//     RoleListDialogComponent,
//     OffLineSpinnerDirective,
//     ApiConnectionLostDirective,
//     MessageConnectionComponent,
//     EquipmentStructureTreeComponent,
//     TriStateCheckboxComponent,
//     ConfirmDialogComponent,
//     BroadcastMessageDirective,
//     KendoCustomDataBindingDirective,
//     TextCommonEntityTextSerializablePipe
//   ],
//   providers: [
//     DatePipe,
//     PushNotificationService
//   ],
//   imports: [
//     CommonModule,
//     MaterialModule,
//     FormsModule,
//     RouterModule,
//     ReactiveFormsModule,
//     KendoModule
//   ],
//   exports: [
//     MaterialModule,
//     KendoModule,
//     FormsModule,
//     ReactiveFormsModule,
//     RouterModule,
//     AutofocusDirective,
//     CmmsTranslatePipe,
//     CmmsTruncatePipe,
//     CmmsDatePipe,
//     OrderByPipe,
//     SafePipe,
//     FileFilterPipe,
//     FormatBreakPipe,
//     FilterPipe,
//     FilterMachinePipe,
//     SearchKeysPipe,
//     MultiChoicePipe,
//     ShiftPipe,
//     MaintainerPipe,
//     IsAuthorizedPipe,
//     MachinePipe,
//     TextValueSerializablePipe,
//     TextGuidSerializablePipe,
//     EquipmentTypePipe,
//     EquipmentCategoryPipe,
//     FindPipe,
//     EquipmentModelPipe,
//     StatusPipe,
//     ExecutedOperationsPipe,
//     WorkOrderTypePipe,
//     DepGeographicalPipe,
//     DepFunctionalPipe,
//     SapCoActivityTypesPipe,
//     SapWorkCenterPipe,
//     WorkOrderDefectTypePipe,
//     MachineTypePipe,
//     ProcessPhasePipe,
//     SubProcessPhasePipe,
//     HighlightPipe,
//     HeaderComponent,
//     TilesComponent,
//     KpiViewerComponent,
//     SpinnerComponent,
//     EquipmentModelTreeComponent,
//     ReasonFilterPipe,
//     SparePartSelectionComponent,
//     WorkOrderStatusesDialogComponent,
//     EquipmentListDialogComponent,
//     OrderListDialogComponent,
//     UserListDialogComponent,
//     RoleListDialogComponent,
//     OffLineSpinnerDirective,
//     ApiConnectionLostDirective,
//     MessageConnectionComponent,
//     EquipmentStructureTreeComponent,
//     TriStateCheckboxComponent,
//     ConfirmDialogComponent,
//     BroadcastMessageDirective,
//     KendoCustomDataBindingDirective,
//     TextCommonEntityTextSerializablePipe
//   ]
// })
// export class SharedModule { }
