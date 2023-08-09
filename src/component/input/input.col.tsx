
export default function InputCol(props: any) {
  const { classname, error, label, change, ...prop } = props;
  return (
    <div className="form-group">
      <label htmlFor="exampleInputCity1">City</label>
      <input {...prop} className="form-control" />
    </div>
  );
}
