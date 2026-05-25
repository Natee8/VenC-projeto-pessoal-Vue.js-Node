export interface HostingAvailabilityProps {
    enabled: boolean;
    suspended: boolean;
}
export declare class HostingAvailability {
    private readonly props;
    private constructor();
    static create(params: {
        enabled: boolean;
        isVerified: boolean;
        hasValidAddress: boolean;
        serviceRadiusKm: number;
        minimumRadiusKm?: number;
    }): HostingAvailability;
    static restore(props: HostingAvailabilityProps): HostingAvailability;
    getValue(): HostingAvailabilityProps;
    toPrimitives(): HostingAvailabilityProps;
    isEnabled(): boolean;
    isSuspended(): boolean;
    enable(): HostingAvailability;
    disable(): HostingAvailability;
    suspend(): HostingAvailability;
    unsuspend(): HostingAvailability;
    equals(other: HostingAvailability): boolean;
}
