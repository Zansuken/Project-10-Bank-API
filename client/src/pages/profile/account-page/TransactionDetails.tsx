import { FC, useState } from "react";
import { Transaction } from "../../../types/transactions";
import classes from "./TransactionDetails.module.scss";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input";
import IconButton from "../../../components/IconButton";

type ItemProps = {
  transactionId: string;
  label: string;
  value: string;
  canUpdate?: boolean;
};

const Item: FC<ItemProps> = ({ transactionId, label, value, canUpdate }) => {
  const { register, handleSubmit, watch } = useForm();
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const onSubmit = () => {
    setIsEditing(false);

    if (watch("value") === value) {
      return;
    }

    console.log(
      `submitted changes for transaction ${transactionId}: `,
      watch("value")
    );
  };

  if (!canUpdate) {
    return (
      <div className={classes["item"]}>
        <span className={classes["label"]}>{label}:</span>
        <div className={classes["value-container"]}>
          <span>{value}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={classes["item"]}>
      <span className={classes["label"]}>{label}:</span>
      {isEditing ? (
        <form
          className={classes["value-container"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            formProps={register("value")}
            inputProps={{ defaultValue: value }}
            isDirty={!!watch("value")}
          />
          <IconButton
            icon={<i className="fa fa-check" aria-hidden="true"></i>}
            submit
          />
        </form>
      ) : (
        <div className={classes["value-container"]}>
          <span>{watch("value") || value}</span>
          <IconButton
            icon={<i className="fa fa-pencil" aria-hidden="true"></i>}
            onClick={handleEdit}
          />
        </div>
      )}
    </div>
  );
};

type Props = {
  transaction: Transaction;
};

const TransactionDetails: FC<Props> = ({
  transaction: { id, type, category, notes },
}) => {
  return (
    <div className={classes["root"]}>
      <Item transactionId={id} label="Transaction Type" value={type} />
      <Item transactionId={id} label="Category" value={category} canUpdate />
      <Item transactionId={id} label="Notes" value={notes} canUpdate />
    </div>
  );
};

export default TransactionDetails;
