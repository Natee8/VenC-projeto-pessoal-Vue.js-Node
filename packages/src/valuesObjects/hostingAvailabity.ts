export class HostingAvailability {
  private constructor(
    private readonly enabled: boolean,
    private readonly suspended: boolean,
  ) {}

  static create(params: {
    enabled: boolean;
    isVerified: boolean;
    hasValidAddress: boolean;
    serviceRadiusKm: number;
    minimumRadiusKm?: number;
  }): HostingAvailability {
    const {
      enabled,
      isVerified,
      hasValidAddress,
      serviceRadiusKm,
      minimumRadiusKm = 1,
    } = params;

    if (enabled) {
      if (!isVerified) {
        throw new Error("Cuidador não verificado não pode hospedar");
      }

      if (!hasValidAddress) {
        throw new Error("Hospedagem exige endereço válido");
      }

      if (serviceRadiusKm < minimumRadiusKm) {
        throw new Error("Raio insuficiente para hospedagem");
      }
    }

    return new HostingAvailability(enabled, false);
  }

  enable(): HostingAvailability {
    if (this.suspended) {
      throw new Error("Hospedagem suspensa");
    }

    return new HostingAvailability(true, false);
  }

  disable(): HostingAvailability {
    return new HostingAvailability(false, false);
  }

  suspend(): HostingAvailability {
    if (!this.enabled) {
      throw new Error("Não é possível suspender hospedagem desabilitada");
    }

    return new HostingAvailability(this.enabled, true);
  }

  unsuspend(): HostingAvailability {
    if (!this.suspended) {
      throw new Error("Hospedagem não está suspensa");
    }

    return new HostingAvailability(this.enabled, false);
  }

  isEnabled(): boolean {
    return this.enabled && !this.suspended;
  }

  isSuspended(): boolean {
    return this.suspended;
  }
}
