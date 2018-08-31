import * as React from 'react';
import styles from './TwaeitField.module.scss';
import { ITwaeitFieldProps } from './ITwaeitFieldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as strings from 'TwaeitFormsWebPartStrings';
import {TextField} from 'office-ui-fabric-react/lib/TextField';
import {ITwaeitField} from "../Model/ITwaeitField";

export default class TwaeitField extends React.Component<ITwaeitFieldProps, ITwaeitField> {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  };

  public render(): React.ReactElement<ITwaeitFieldProps> {
    return (
    <div className={ styles.twaeitField }>
        <TextField
            value={this.state.value}
            required={true}
            onChanged={this.handleChange}
            errorMessage={(this.state.value.length === 0)
            ? strings.FieldRequiredMessage
            : ""}/>
    </div>
    );
  }

  private handleChange(value : string) : void {
    return this.setState({name: value});
  }

}
