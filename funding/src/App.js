
function App() {
  return (
    <>
      <div class="card text-center">
        <div class="card-header">Funding</div>
        <div class="card-body">
          <h5 class="card-title">Balance: 20 ETH </h5>
          <p class="card-text">
            Account :0x000000000
          </p>
          <button type='button' class="btn btn-success">
            Connect to metamask
          </button>
          &nbsp;
          <button type="button" class="btn btn-success " >
            Transfer
          </button>
          &nbsp;
          <button type="button" class="btn btn-primary " >
            Withdraw
          </button>
        </div>
        <div class="card-footer text-muted">Made With ❤️</div>
      </div>
    </>
  );
}

export default App;
