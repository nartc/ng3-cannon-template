import { BoxProps, GetByIndex, SphereProps } from "@angular-three/cannon";
import { NgtEuler, NgtTriplet, NgtVector3 } from "@angular-three/core";
import { Component, Input } from "@angular/core";
import { Vector3 } from "three";

@Component({
  selector: 'ragdoll-model',
  templateUrl: 'ragdoll-model.component.html'
})
export class RagdollModelComponent {
  @Input() name = 'ragdoll';

  private _position = [0, 0, 0] as NgtTriplet;
  @Input()
  get position(): NgtTriplet {
    return this._position;
  }
  set position(newvalue: NgtTriplet) {
    this._position = newvalue;
    this.updatePositions(new Vector3(this.position[0], this.position[1], this.position[2]));
  }

  @Input() rotation = [0, 0, 0] as NgtEuler;
  @Input() scale = 1;
  @Input() angle = 0;
  @Input() angleShoulders = 0;
  @Input() twistAngle = 0;
  @Input() mass = 1;

  // https://www.w3schools.com/colors/colors_palettes.asp 2016 palettes
  @Input() headcolor = '#f7cac9';
  @Input() bodycolor = '#034f84';
  @Input() armcolor = '#92a8d1';
  @Input() legcolor = '#f7786b';

  headRadius = 0.25 * this.scale;
  shouldersDistance = 0.5 * this.scale
  upperArmLength = 0.4 * this.scale
  lowerArmLength = 0.4 * this.scale
  upperArmSize = 0.2 * this.scale
  lowerArmSize = 0.2 * this.scale
  neckLength = 0.1 * this.scale
  upperBodyLength = 0.6 * this.scale
  pelvisLength = 0.4 * this.scale
  upperLegLength = 0.5 * this.scale
  upperLegSize = 0.2 * this.scale
  lowerLegSize = 0.2 * this.scale
  lowerLegLength = 0.5 * this.scale

  upperArmArgs = [this.upperArmLength, this.upperArmSize , this.upperArmSize ] as NgtTriplet;
  lowerArmArgs = [this.lowerArmLength , this.lowerArmSize , this.lowerArmSize ] as NgtTriplet;
  upperBodyArgs = [this.shouldersDistance , this.lowerArmSize , this.upperBodyLength ] as NgtTriplet;
  pelvisArgs = [this.shouldersDistance , this.lowerArmSize , this.pelvisLength ] as NgtTriplet;
  upperLegArgs = [this.upperLegSize , this.lowerArmSize , this.upperLegLength ] as NgtTriplet;
  lowerLegArgs = [this.lowerLegSize , this.lowerArmSize , this.lowerLegLength ] as NgtTriplet;

  lowerLeftLegPosition!: Vector3;
  lowerRightLegPosition!: Vector3;

  upperLeftLegPosition!: Vector3;
  upperRightLegPosition!: Vector3;

  pelvisPosition!: Vector3;
  upperBodyPosition!: Vector3;

  headPosition!: Vector3;

  upperLeftArmPosition!: Vector3;
  upperRightArmPosition!: Vector3;

  lowerLeftArmPosition!: Vector3;
  lowerRightArmPosition!: Vector3;

  private updatePositions(position: Vector3) {
    this.lowerLeftLegPosition = new Vector3(this.shouldersDistance / 2, 0, this.lowerLegLength / 2).add(position);
    this.lowerRightLegPosition = new Vector3(-this.shouldersDistance / 2, 0, this.lowerLegLength / 2).add(position);

    this.upperLeftLegPosition = new Vector3(this.shouldersDistance / 2, 0, this.lowerLeftLegPosition.z + this.lowerLegLength / 2 + this.upperLegLength / 2).add(position);
    this.upperRightLegPosition = new Vector3(-this.shouldersDistance / 2, 0, this.lowerRightLegPosition.z + this.lowerLegLength / 2 + this.upperLegLength / 2).add(position);

    this.pelvisPosition = new Vector3(0, 0, this.upperLeftLegPosition.z + this.upperLegLength / 2 + this.pelvisLength / 2).add(position);
    this.upperBodyPosition = new Vector3(0, 0, this.pelvisPosition.z + this.pelvisLength / 2 + this.upperBodyLength / 2).add(position);

    this.headPosition = new Vector3(0, 0, this.upperBodyPosition.z + this.upperBodyLength / 2 + this.headRadius + this.neckLength).add(position);

    this.upperLeftArmPosition = new Vector3(this.shouldersDistance / 2 + this.upperArmLength / 2, 0, this.upperBodyPosition.z + this.upperBodyLength / 2).add(position);
    this.upperRightArmPosition = new Vector3(-this.shouldersDistance / 2 - this.upperArmLength / 2, 0, this.upperBodyPosition.z + this.upperBodyLength / 2).add(position);

    this.lowerLeftArmPosition = new Vector3(this.upperLeftArmPosition.x + this.lowerArmLength / 2 + this.upperArmLength / 2, 0, this.upperLeftArmPosition.z).add(position);
    this.lowerRightArmPosition = new Vector3(this.upperRightArmPosition.x - this.lowerArmLength / 2 - this.upperArmLength / 2, 0, this.upperRightArmPosition.z).add(position);
  }

  neckjoint: Record<string, any> = {
    pivotA: [0, 0, -this.headRadius - this.neckLength / 2],
    pivotB: [0, 0, this.upperBodyLength / 2],
    axisA: [0, 0, 1], // CANNON.Vec3.UNIT_Z,
    axisB: [0, 0, 1], // CANNON.Vec3.UNIT_Z,
    angle: this.angle,
    twistAngle: this.twistAngle,
  }

  kneeJoint: Record<string, any> = {
    pivotA: [0, 0, this.lowerLegLength / 2],
    pivotB: [0, 0, -this.upperLegLength / 2],
    axisA: [0, 0, 1], // CANNON.Vec3.UNIT_Z,
    axisB: [0, 0, 1], // CANNON.Vec3.UNIT_Z,
    angle: this.angle,
    twistAngle: this.twistAngle,
  }

  elbowJoint: Record<string, any> = {
    pivotA: [-this.lowerArmLength / 2, 0, 0],
    pivotB: [this.upperArmLength / 2, 0, 0],
    axisA: [1, 0, 0], // CANNON.Vec3.UNIT_X,
    axisB: [1, 0, 0], // CANNON.Vec3.UNIT_X,
    angle: this.angle,
    twistAngle: this.twistAngle,
  }

  getLowerLeftLegProps: GetByIndex<BoxProps> = (index: number) => (
    {
      mass: this.mass,
      position: [this.lowerLeftLegPosition.x, this.lowerLeftLegPosition.y, this.lowerLeftLegPosition.z] as NgtTriplet,
      args: this.lowerLegArgs
    }
  )

  getLowerRightLegProps: GetByIndex<BoxProps> = (index: number) => (
    {
      mass: this.mass,
      position: [this.lowerRightLegPosition.x, this.lowerRightLegPosition.y, this.lowerRightLegPosition.z] as NgtTriplet,
      args: this.lowerLegArgs
    }
  )

  getUpperLeftLegProps: GetByIndex<BoxProps> = (index: number) => (
    {
      mass: this.mass,
      position: [this.upperLeftLegPosition.x, this.upperLeftLegPosition.y, this.upperLeftLegPosition.z] as NgtTriplet,
      args: this.upperLegArgs
    }
  )

  getUpperRightLegProps: GetByIndex<BoxProps> = (index: number) => (
    {
      mass: this.mass,
      position: [this.upperRightLegPosition.x, this.upperRightLegPosition.y, this.upperRightLegPosition.z] as NgtTriplet,
      args: this.upperLegArgs
    }
  )

  getPelvisProps: GetByIndex<BoxProps> = (index: number) => (
    {
      mass: this.mass,
      position: [this.pelvisPosition.x, this.pelvisPosition.y, this.pelvisPosition.z] as NgtTriplet,
      args: this.pelvisArgs
    }
  )

  getUpperBodyProps: GetByIndex<BoxProps> = (index: number) => (
    {
      mass: this.mass,
      position: [this.upperBodyPosition.x, this.upperBodyPosition.y, this.upperBodyPosition.z] as NgtTriplet,
      args: this.upperBodyArgs
    }
  )

  getHeadProps: GetByIndex<SphereProps> = (index: number) => (
    {
      mass: this.mass,
      position: [this.headPosition.x, this.headPosition.y, this.headPosition.z] as NgtTriplet,
      args: [this.headRadius]
    }
  )

  getUpperLeftArmProps: GetByIndex<BoxProps> = (index: number) => (
    {
      mass: this.mass,
      position: [this.upperLeftArmPosition.x, this.upperLeftArmPosition.y, this.upperLeftArmPosition.z] as NgtTriplet,
      args: this.upperArmArgs
    }
  )

  getUpperRightArmProps: GetByIndex<BoxProps> = (index: number) => (
    {
      mass: this.mass,
      position: [this.upperRightArmPosition.x, this.upperRightArmPosition.y, this.upperRightArmPosition.z] as NgtTriplet,
      args: this.upperArmArgs
    }
  )

  getLowerLeftArmProps: GetByIndex<BoxProps> = (index: number) => (
    {
      mass: this.mass,
      position: [this.lowerLeftArmPosition.x, this.lowerLeftArmPosition.y, this.lowerLeftArmPosition.z] as NgtTriplet,
      args: this.lowerArmArgs
    }
  )

  getLowerRightArmProps: GetByIndex<BoxProps> = (index: number) => (
    {
      mass: this.mass,
      position: [this.lowerRightArmPosition.x, this.lowerRightArmPosition.y, this.lowerRightArmPosition.z] as NgtTriplet,
      args: this.lowerArmArgs
    }
  )


  constructor() {
    this.updatePositions(new Vector3(this.position[0], this.position[1], this.position[2]));
  }
}