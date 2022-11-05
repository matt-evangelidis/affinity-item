import {
  defaultItemOptions,
  ItemAmmoType,
  ItemField,
  itemFieldsArray,
  ItemFiringMode,
  itemOptions,
  ItemRange,
  ItemSingleShotAttachment,
  ITEM_FIELD_KEYS,
  StoredConfig,
} from 'src/util/item';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly localStorageKey = 'affinityItem';
  readonly itemDataSource = itemOptions;
  readonly itemFieldKeys = ITEM_FIELD_KEYS;
  storedConfig = this.getChoices();

  public form = this.fb.group({
    ammoType: [
      this.getItemDataSourceRef(this.itemFieldKeys.AMMO_TYPE) ||
        this.storedConfig.ammoType,
    ],
    range: [
      this.getItemDataSourceRef(this.itemFieldKeys.RANGE) ||
        this.storedConfig.range,
    ],
    firingMode: [
      this.getItemDataSourceRef(this.itemFieldKeys.FIRING_MODE) ||
        this.storedConfig.firingMode,
    ],
    singleShotAttachment: [
      this.getItemDataSourceRef(this.itemFieldKeys.SINGLE_SHOT_ATTACHMENT) ||
        this.storedConfig.singleShotAttachment,
    ],
  });

  displayedColumns = {
    ammoType: ['name', 'effect'],
    range: ['name', 'damage', 'properties'],
    firingMode: ['name', 'effect'],
    singleShotAttachment: ['name', 'effect'],
  };

  public constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.storedConfig);
  }

  storeChoice(key: string, change: MatOptionSelectionChange): void {
    if (!change.isUserInput) {
      return;
    }

    const value = change.source.value;

    switch (key) {
      case this.itemFieldKeys.AMMO_TYPE:
        this.storedConfig.ammoType = value as ItemAmmoType;
        break;
      case this.itemFieldKeys.RANGE:
        this.storedConfig.range = value as ItemRange;
        break;
      case this.itemFieldKeys.FIRING_MODE:
        this.storedConfig.firingMode = value as ItemFiringMode;
        break;
      case this.itemFieldKeys.SINGLE_SHOT_ATTACHMENT:
        this.storedConfig.singleShotAttachment =
          value as ItemSingleShotAttachment;
        break;
      default:
        break;
    }

    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(this.storedConfig)
    );
  }

  getChoices(): StoredConfig {
    let storedChoices = localStorage.getItem(this.localStorageKey);

    if (storedChoices) {
      const storedObject = JSON.parse(storedChoices);

      if (
        Object.keys(storedObject).every((key) => itemFieldsArray.includes(key))
      ) {
        return storedObject as StoredConfig;
      }
    }
    return defaultItemOptions;
  }

  getItemDataSourceRef(key: ITEM_FIELD_KEYS): ItemField | null {
    let ref = null;
    switch (key) {
      case this.itemFieldKeys.AMMO_TYPE:
        ref = this.itemDataSource.ammoTypes.findIndex(
          (ammoType) => ammoType.name === this.storedConfig.ammoType.name
        );
        return this.itemDataSource.ammoTypes[ref];
      case this.itemFieldKeys.RANGE:
        ref = this.itemDataSource.ranges.findIndex(
          (range) => range.name === this.storedConfig.range.name
        );
        return this.itemDataSource.ranges[ref];
      case this.itemFieldKeys.FIRING_MODE:
        ref = this.itemDataSource.firingModes.findIndex(
          (firingMode) => firingMode.name === this.storedConfig.firingMode.name
        );
        return this.itemDataSource.firingModes[ref];
      case this.itemFieldKeys.SINGLE_SHOT_ATTACHMENT:
        ref = this.itemDataSource.singleShotAttachments.findIndex(
          (singleShotAttachment) =>
            singleShotAttachment.name ===
            this.storedConfig.singleShotAttachment.name
        );
        return this.itemDataSource.singleShotAttachments[ref];
      default:
        break;
    }
    return null;
  }
}
