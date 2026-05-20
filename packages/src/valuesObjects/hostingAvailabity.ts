export interface HostingAvailabilityProps {
  enabled: boolean;
  suspended: boolean;
}

export class HostingAvailability {
  private constructor(private readonly props: HostingAvailabilityProps) {}

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

    return new HostingAvailability({
      enabled,
      suspended: false,
    });
  }

  static restore(props: HostingAvailabilityProps): HostingAvailability {
    return new HostingAvailability(props);
  }

  getValue(): HostingAvailabilityProps {
    return { ...this.props };
  }

  toPrimitives(): HostingAvailabilityProps {
    return { ...this.props };
  }

  isEnabled(): boolean {
    return this.props.enabled && !this.props.suspended;
  }

  isSuspended(): boolean {
    return this.props.suspended;
  }

  enable(): HostingAvailability {
    if (this.props.suspended) {
      throw new Error("Hospedagem suspensa");
    }

    return new HostingAvailability({
      ...this.props,
      enabled: true,
    });
  }

  disable(): HostingAvailability {
    return new HostingAvailability({
      ...this.props,
      enabled: false,
    });
  }

  suspend(): HostingAvailability {
    if (!this.props.enabled) {
      throw new Error("Não é possível suspender hospedagem desabilitada");
    }

    return new HostingAvailability({
      ...this.props,
      suspended: true,
    });
  }

  unsuspend(): HostingAvailability {
    if (!this.props.suspended) {
      throw new Error("Hospedagem não está suspensa");
    }

    return new HostingAvailability({
      ...this.props,
      suspended: false,
    });
  }

  equals(other: HostingAvailability): boolean {
    return (
      this.props.enabled === other.getValue().enabled &&
      this.props.suspended === other.getValue().suspended
    );
  }
}
