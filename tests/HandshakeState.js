// Generated by LiveScript 1.5.0
/**
 * @package   noise-c.wasm
 * @author    Nazar Mokrynskyi <nazar@mokrynskyi.com>
 * @copyright Copyright (c) 2017, Nazar Mokrynskyi
 * @license   MIT License, see license.txt
 */
(function(){
  var randombytes, lib, test, patterns, curves, ciphers, hashes, prologues, psks, ads, plaintexts, static_keys, roles_keys, no_empty_keys, expected_actions;
  randombytes = require('crypto').randomBytes;
  lib = require('..');
  test = require('tape');
  patterns = ['N', 'X', 'K'];
  curves = ['25519', '448'];
  ciphers = ['ChaChaPoly', 'AESGCM'];
  hashes = ['SHA256', 'SHA512', 'BLAKE2s', 'BLAKE2b'];
  prologues = [null, new Uint8Array, randombytes(10)];
  psks = [null, new Uint8Array, randombytes(32)];
  ads = [new Uint8Array, randombytes(256)];
  plaintexts = [new Uint8Array, new Uint8Array(randombytes(10))];
  static_keys = {
    NOISE_ROLE_INITIATOR: {
      'private': {
        '25519': Uint8Array.of(230, 30, 249, 145, 156, 222, 69, 221, 95, 130, 22, 100, 4, 189, 8, 227, 139, 206, 181, 223, 223, 222, 208, 163, 76, 141, 247, 237, 84, 34, 20, 209),
        '448': Uint8Array.of(52, 213, 100, 196, 190, 150, 61, 27, 42, 137, 252, 254, 131, 230, 167, 43, 94, 63, 94, 49, 39, 249, 245, 150, 255, 199, 87, 94, 65, 141, 252, 31, 78, 130, 124, 252, 16, 201, 254, 211, 142, 146, 173, 86, 221, 248, 240, 133, 113, 67, 13, 242, 231, 109, 84, 17)
      },
      'public': {
        '25519': Uint8Array.of(107, 195, 130, 42, 42, 167, 244, 230, 152, 29, 101, 56, 105, 43, 60, 223, 62, 109, 249, 238, 166, 237, 38, 158, 180, 29, 147, 194, 39, 87, 183, 90),
        '448': Uint8Array.of(48, 21, 81, 236, 161, 120, 143, 68, 81, 194, 105, 190, 175, 237, 17, 11, 81, 240, 140, 4, 148, 168, 222, 97, 74, 24, 79, 243, 212, 103, 215, 222, 253, 252, 124, 19, 142, 70, 105, 89, 17, 8, 182, 154, 5, 109, 37, 202, 253, 162, 137, 242, 45, 31, 50, 192)
      }
    },
    NOISE_ROLE_RESPONDER: {
      'private': {
        '25519': Uint8Array.of(74, 58, 203, 253, 177, 99, 222, 198, 81, 223, 163, 25, 77, 236, 230, 118, 212, 55, 2, 156, 98, 164, 8, 180, 197, 234, 145, 20, 36, 110, 72, 147),
        '448': Uint8Array.of(169, 180, 89, 113, 24, 8, 130, 167, 155, 137, 163, 57, 149, 68, 164, 37, 239, 129, 54, 210, 120, 239, 164, 67, 237, 103, 211, 255, 157, 54, 232, 131, 188, 51, 12, 98, 149, 187, 246, 237, 115, 255, 111, 209, 12, 190, 215, 103, 173, 5, 206, 3, 235, 210, 124, 124)
      },
      'public': {
        '25519': Uint8Array.of(49, 224, 48, 63, 214, 65, 141, 47, 140, 14, 120, 185, 31, 34, 232, 202, 237, 15, 190, 72, 101, 109, 207, 71, 103, 228, 131, 79, 112, 27, 143, 98),
        '448': Uint8Array.of(189, 32, 15, 166, 213, 13, 179, 167, 67, 121, 123, 0, 172, 161, 183, 15, 65, 123, 252, 56, 27, 40, 178, 27, 88, 53, 216, 76, 247, 166, 218, 106, 187, 161, 158, 59, 167, 212, 107, 37, 52, 18, 183, 70, 101, 212, 98, 123, 101, 252, 239, 63, 41, 201, 93, 62)
      }
    }
  };
  roles_keys = ['NOISE_ROLE_INITIATOR', 'NOISE_ROLE_RESPONDER', null];
  no_empty_keys = {
    local: /^[KXI]/,
    remote: /(^.|[KXI])$/
  };
  expected_actions = {};
  expected_actions.N = {
    initiator: ['NOISE_ACTION_WRITE_MESSAGE'],
    responder: ['NOISE_ACTION_READ_MESSAGE']
  };
  expected_actions.X = expected_actions.N;
  expected_actions.K = expected_actions.N;
  lib.ready(function(){
    var i$, ref$, len$;
    for (i$ = 0, len$ = (ref$ = patterns).length; i$ < len$; ++i$) {
      (fn$.call(this, ref$[i$]));
    }
    function fn$(pattern){
      var i$, ref$, len$;
      for (i$ = 0, len$ = (ref$ = curves).length; i$ < len$; ++i$) {
        (fn$.call(this, ref$[i$]));
      }
      function fn$(curve){
        var i$, ref$, len$;
        for (i$ = 0, len$ = (ref$ = ciphers).length; i$ < len$; ++i$) {
          (fn$.call(this, ref$[i$]));
        }
        function fn$(cipher){
          var i$, ref$, len$;
          for (i$ = 0, len$ = (ref$ = hashes).length; i$ < len$; ++i$) {
            (fn$.call(this, ref$[i$]));
          }
          function fn$(hash){
            var i$, ref$, len$;
            for (i$ = 0, len$ = (ref$ = prologues).length; i$ < len$; ++i$) {
              (fn$.call(this, ref$[i$]));
            }
            function fn$(prologue){
              var i$, ref$, len$;
              for (i$ = 0, len$ = (ref$ = psks).length; i$ < len$; ++i$) {
                (fn$.call(this, ref$[i$]));
              }
              function fn$(psk){
                var i$, ref$, len$;
                for (i$ = 0, len$ = (ref$ = roles_keys).length; i$ < len$; ++i$) {
                  (fn$.call(this, ref$[i$]));
                }
                function fn$(role_key_s){
                  var i$, ref$, len$;
                  for (i$ = 0, len$ = (ref$ = roles_keys).length; i$ < len$; ++i$) {
                    (fn$.call(this, ref$[i$]));
                  }
                  function fn$(role_key_rs){
                    var protocol_name, prologue_title, psk_title, i$, ref$, len$;
                    if (!role_key_s && no_empty_keys.local.test(pattern)) {
                      return;
                    }
                    if (!role_key_rs && no_empty_keys.remote.test(pattern)) {
                      return;
                    }
                    protocol_name = "Noise_" + pattern + "_" + curve + "_" + cipher + "_" + hash;
                    prologue_title = prologue ? "length " + prologue.length : 'null';
                    psk_title = psk ? "length " + psk.length : 'null';
                    for (i$ = 0, len$ = (ref$ = ads).length; i$ < len$; ++i$) {
                      (fn$.call(this, ref$[i$]));
                    }
                    function fn$(ad){
                      var i$, ref$, len$;
                      for (i$ = 0, len$ = (ref$ = plaintexts).length; i$ < len$; ++i$) {
                        (fn$.call(this, ref$[i$]));
                      }
                      function fn$(plaintext){
                        test("HandshakeState: " + protocol_name + ", prologue " + prologue_title + ", psk " + psk_title + ", role_key_s " + role_key_s + ", role_key_rs " + role_key_rs + ", plaintext length " + plaintext.length + ", ad length " + ad.length, function(t){
                          var initiator_hs, responder_hs, initiator_actions, responder_actions, message, action, initiator_send, initiator_receive, responder_send, responder_receive, ciphertext, plaintext_decrypted;
                          t.doesNotThrow(function(){
                            initiator_hs = new lib.HandshakeState(protocol_name, lib.constants.NOISE_ROLE_INITIATOR);
                          }, "Initiator constructor doesn't throw an error");
                          t.doesNotThrow(function(){
                            responder_hs = new lib.HandshakeState(protocol_name, lib.constants.NOISE_ROLE_RESPONDER);
                          }, "Responder constructor doesn't throw an error");
                          t.doesNotThrow(function(){
                            var s, rs;
                            s = role_key_s;
                            if (s) {
                              s = static_keys[s]['private'][curve];
                            }
                            rs = role_key_rs;
                            if (rs) {
                              rs = static_keys[rs]['public'][curve];
                            }
                            initiator_hs.Initialize(prologue, s, rs, psk);
                          }, "Initiator Initialize() doesn't throw an error");
                          t.doesNotThrow(function(){
                            var s, rs;
                            s = role_key_rs;
                            if (s) {
                              s = static_keys[s]['private'][curve];
                            }
                            rs = role_key_s;
                            if (rs) {
                              rs = static_keys[rs]['public'][curve];
                            }
                            responder_hs.Initialize(prologue, s, rs, psk);
                          }, "Responder Initialize() doesn't throw an error");
                          initiator_actions = expected_actions[pattern].initiator.slice();
                          responder_actions = expected_actions[pattern].responder.slice();
                          while (action = initiator_actions.shift()) {
                            if (action) {
                              t.equal(initiator_hs.GetAction(), lib.constants[action], "Initiator expected action: " + action);
                            }
                            switch (action) {
                            case 'NOISE_ACTION_WRITE_MESSAGE':
                              t.doesNotThrow(fn$, "Initiator WriteMessage() doesn't throw an error");
                              while (action = responder_actions.shift()) {
                                if (action) {
                                  t.equal(responder_hs.GetAction(), lib.constants[action], "Responder expected action: " + action);
                                }
                                switch (action) {
                                case 'NOISE_ACTION_READ_MESSAGE':
                                  t.doesNotThrow(fn1$, "Responder ReadMessage() doesn't throw an error");
                                  break;
                                case 'NOISE_ACTION_WRITE_MESSAGE':
                                  t.doesNotThrow(fn2$, "Responder WriteMessage() doesn't throw an error");
                                }
                              }
                              break;
                            case 'NOISE_ACTION_READ_MESSAGE':
                            case '':
                              t.doesNotThrow(fn3$, "Initiator ReadMessage() doesn't throw an error");
                            }
                          }
                          t.equal(initiator_hs.GetAction(), lib.constants.NOISE_ACTION_SPLIT, 'Initiator is ready to split');
                          t.equal(responder_hs.GetAction(), lib.constants.NOISE_ACTION_SPLIT, 'Responder is ready to split');
                          t.doesNotThrow(function(){
                            var ref$;
                            ref$ = initiator_hs.Split(), initiator_send = ref$[0], initiator_receive = ref$[1];
                          }, "Initiator Split() doesn't throw an error");
                          t.ok(initiator_send instanceof lib.CipherState, 'Initiator Element #1 after Split() implements CipherState');
                          t.ok(initiator_receive instanceof lib.CipherState, 'Initiator Element #2 after Split() implements CipherState');
                          t.throws(function(){
                            initiator_hs.Initialize(plaintext);
                          }, "Initiator HandshakeState shouldn't be usable after Split() is called");
                          t.doesNotThrow(function(){
                            var ref$;
                            ref$ = responder_hs.Split(), responder_send = ref$[0], responder_receive = ref$[1];
                          }, "Responder Split() doesn't throw an error");
                          t.ok(responder_send instanceof lib.CipherState, 'Responder Element #1 after Split() implements CipherState');
                          t.ok(responder_receive instanceof lib.CipherState, 'Responder Element #2 after Split() implements CipherState');
                          t.throws(function(){
                            responder_hs.Initialize(plaintext);
                          }, "Responder HandshakeState shouldn't be usable after Split() is called");
                          ciphertext = initiator_send.EncryptWithAd(ad, plaintext);
                          t.equal(ciphertext.length, plaintext.length + initiator_send._mac_length, 'Initiator ciphertext has expected length');
                          if (plaintext.length) {
                            t.notEqual(ciphertext.slice(0, plaintext.length).toString(), plaintext.toString(), 'Initiator ciphertext is not the same as plaintext');
                          }
                          initiator_send.free();
                          plaintext_decrypted = responder_receive.DecryptWithAd(ad, ciphertext);
                          responder_receive.free();
                          t.equal(plaintext_decrypted.toString(), plaintext.toString(), 'Responder plaintext decrypted correctly');
                          ciphertext = responder_send.EncryptWithAd(ad, plaintext);
                          t.equal(ciphertext.length, plaintext.length + responder_send._mac_length, 'Responder ciphertext has expected length');
                          if (plaintext.length) {
                            t.notEqual(ciphertext.slice(0, plaintext.length).toString(), plaintext.toString(), 'Responder ciphertext is not the same as plaintext');
                          }
                          responder_send.free();
                          plaintext_decrypted = initiator_receive.DecryptWithAd(ad, ciphertext);
                          initiator_receive.free();
                          t.equal(plaintext_decrypted.toString(), plaintext.toString(), 'Initiator plaintext decrypted correctly');
                          t.end();
                          function fn$(){
                            message = initiator_hs.WriteMessage();
                          }
                          function fn1$(){
                            responder_hs.ReadMessage(message);
                          }
                          function fn2$(){
                            message = responder_hs.WriteMessage();
                          }
                          function fn3$(){
                            initiator_hs.ReadMessage(message);
                          }
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
}).call(this);
