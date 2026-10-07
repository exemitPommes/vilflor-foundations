import { Component, input, output, signal } from '@angular/core';
import { CoreCvaComponentBase } from '../../../utils/core-cva-component-base';

@Component({
    selector: 'vf-dropzone',
    standalone: true,
    templateUrl: './dropzone.component.html',
    styleUrl: './dropzone.component.scss',
    host: {
        '[class.vf-dropzone-active]': 'isDragging()',
        '[class.vf-disabled]': 'isDisabled()',
        '(dragover)': 'onDragOver($event)',
        '(dragleave)': 'onDragLeave($event)',
        '(drop)': 'onDrop($event)'
    }
}) export class DropzoneComponent extends CoreCvaComponentBase<File | File[]> {
    //Component ready for a specific purpose atm, will be expanded in the future
    readonly multiple = input(false);
    readonly maxFileSizeMb = input(10);

    readonly isDragging = signal(false);
    readonly fileSelected = output<File>();
    readonly filesSelected = output<File[]>();
    readonly errorOccurred = output<string>();

    onDragOver(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        if (!this.isDisabled()) {
            this.isDragging.set(true);
        }
    }

    onDragLeave(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging.set(false);
    }

    onDrop(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging.set(false);

        if (this.isDisabled()) {
            return;
        }

        this.processFiles(event.dataTransfer?.files);
    }

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.processFiles(input.files);
        input.value = '';
    }

    private processFiles(fileList: FileList | null | undefined) {
        if (!fileList || fileList.length === 0) {
            return;
        }

        const filesArray = Array.from(fileList);

        if (!this.multiple() && filesArray.length > 1) {
            this.errorOccurred.emit('Solo se permite analizar 1 documento a la vez.');
            return;
        }

        const maxBytes = this.maxFileSizeMb() * 1024 * 1024;
        const oversizedFiles = filesArray.filter(file => file.size > maxBytes);

        if (oversizedFiles.length > 0) {
            this.errorOccurred.emit(`El archivo supera el límite máximo de ${this.maxFileSizeMb()}MB.`);
            return;
        }

        if (!this.multiple()) {
            const file = filesArray[0];
            this.fileSelected.emit(file);
            this.updateValue(file);
        } else {
            this.filesSelected.emit(filesArray);
            this.updateValue(filesArray);
        }
    }
}