//
//  EmulatorDetectionModule.swift
//  exageDemom
//
//  Created by apple on 3/21/22.
//

import Foundation

@objc(EmulatorDetectionModule)
class EmulatorDetectionModule : NSObject{
  @objc
   func isEmulator(_ callback:RCTResponseSenderBlock) -> Bool {
    var flag=false;
#if targetEnvironment(simulator)
    flag=true;
#endif
callback([NSNull(),flag])
    return flag;
  }
}

