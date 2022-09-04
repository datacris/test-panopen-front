const SearchBox = ({ onChangeHandler }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="btn btn-info">Search by Email</span>
      </div>
      <input
        data-testid="searchUser"
        className="form-control"
        type="search"
        placeholder="email..."
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
