export class ValidationError extends Error {
  private _status = 422
  private _name = 'ValidationError'
  constructor(props: Error) {
    super(props.message)
    Error.captureStackTrace(this, this.constructor)
  }

  get status(){
    return this._status
  }

  get data() {
    return {
      name: this._name,
      message: this.message,
      status: this._status
    }
  }
}
